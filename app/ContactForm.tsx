"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  contactReasonValues,
  type ContactReason,
  type ContactFormFields,
} from "./contactSchema";
import { copy, type Locale } from "./data";

type SubmitStatus = "idle" | "success" | "error";

const fieldClass =
  "min-h-14 w-full rounded-[22px] border border-white/10 bg-[#333333] px-7 py-4 text-[15px] outline-none transition placeholder:text-white/55 focus:border-white/40 focus:bg-[#3a3a3a] max-md:px-5";

const textareaClass =
  "min-h-[150px] w-full resize-none rounded-[28px] border border-white/10 bg-[#333333] px-7 py-5 text-[15px] text-white outline-none transition placeholder:text-white/55 focus:border-white/40 focus:bg-[#3a3a3a] max-md:px-5";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale].contactForm;
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      locale,
      name: "",
      email: "",
      subject: "",
      reason: "",
      message: "",
      website: "",
    },
  });
  const selectedReason = watch("reason");

  async function onSubmit(values: ContactFormFields) {
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset({
      locale,
      name: "",
      email: "",
      subject: "",
      reason: "",
      message: "",
      website: "",
    });
    setStatus("success");
  }

  return (
    <form
      className="mx-auto grid w-[min(780px,100%)] gap-3 md:gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <input type="hidden" {...register("locale")} />
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />

      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-4">
        <FieldError active={Boolean(errors.name)} message={t.required}>
          <input
            className={`${fieldClass} text-white`}
            placeholder={t.name}
            aria-label={t.name}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            {...register("name")}
          />
        </FieldError>
        <FieldError active={Boolean(errors.email)} message={t.required}>
          <input
            className={`${fieldClass} text-white`}
            placeholder={t.email}
            aria-label={t.email}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            inputMode="email"
            {...register("email")}
          />
        </FieldError>
      </div>

      <FieldError active={Boolean(errors.subject)} message={t.required}>
        <input
          className={`${fieldClass} text-white`}
          placeholder={t.subject}
          aria-label={t.subject}
          aria-invalid={Boolean(errors.subject)}
          {...register("subject")}
        />
      </FieldError>

      <FieldError active={Boolean(errors.reason)} message={t.required}>
        <input type="hidden" {...register("reason")} />
        <ReasonDropdown
          label={t.reason}
          selectedReason={selectedReason as ContactReason | ""}
          reasons={t.reasons}
          invalid={Boolean(errors.reason)}
          onSelect={(reason) =>
            setValue("reason", reason, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            })
          }
        />
      </FieldError>

      <FieldError active={Boolean(errors.message)} message={t.required}>
        <textarea
          className={textareaClass}
          placeholder={t.message}
          aria-label={t.message}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </FieldError>

      <div className="mt-8 grid justify-items-center gap-4">
        <button
          className="font-enigma inline-flex min-h-10 items-center justify-center rounded-full bg-brand-charcoal px-7 py-2 font-normal lowercase text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.submitting : t.submit}
        </button>

        {status === "success" ? (
          <p className="text-center text-sm text-white/75">{t.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-center text-sm text-white/75">{t.error}</p>
        ) : null}
      </div>
    </form>
  );
}

function ReasonDropdown({
  label,
  selectedReason,
  reasons,
  invalid,
  onSelect,
}: {
  label: string;
  selectedReason: ContactReason | "";
  reasons: Record<ContactReason, string>;
  invalid: boolean;
  onSelect: (reason: ContactReason) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutside(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`${fieldClass} flex cursor-pointer items-center justify-between gap-4 text-left ${
          selectedReason ? "text-white" : "text-white/55"
        }`}
        type="button"
        aria-label={label}
        aria-invalid={invalid}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selectedReason ? reasons[selectedReason] : label}</span>
        <span
          className={`block size-3 shrink-0 border-b-2 border-r-2 border-white transition ${
            open
              ? "translate-y-1 rotate-[225deg]"
              : "-translate-y-0.5 rotate-45"
          }`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          className="absolute left-4 right-4 top-[calc(100%+2px)] z-20 overflow-hidden bg-white py-2 text-black shadow-[0_18px_45px_rgba(0,0,0,.3)]"
          role="listbox"
        >
          {contactReasonValues.map((reason) => (
            <button
              className={`block w-full px-6 py-1.5 text-left text-[15px] transition hover:bg-black/10 ${
                selectedReason === reason ? "bg-black/10" : ""
              }`}
              type="button"
              role="option"
              aria-selected={selectedReason === reason}
              key={reason}
              onClick={() => {
                onSelect(reason);
                setOpen(false);
              }}
            >
              {reasons[reason]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FieldError({
  active,
  message,
  children,
}: {
  active: boolean;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {active ? (
        <p className="mt-2 px-7 text-xs text-red-500">{message}</p>
      ) : null}
    </div>
  );
}
