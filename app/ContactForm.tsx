"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  contactReasonValues,
  type ContactFormFields,
} from "./contactSchema";
import { copy, type Locale } from "./data";

type SubmitStatus = "idle" | "success" | "error";

const fieldClass =
  "min-h-14 w-full rounded-full border border-white/10 bg-[#333333] px-7 py-4 text-[15px] outline-none transition placeholder:text-white/55 focus:border-white/40 focus:bg-[#3a3a3a] max-md:px-5";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale].contactForm;
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    watch,
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
        <select
          className={`${fieldClass} cursor-pointer appearance-none bg-no-repeat pr-12 ${
            selectedReason ? "text-white" : "text-white/55"
          }`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
            backgroundPosition: "right 1rem center",
            backgroundSize: "14px",
          }}
          aria-label={t.reason}
          aria-invalid={Boolean(errors.reason)}
          defaultValue=""
          {...register("reason")}
        >
          <option className="bg-white text-black" value="" disabled>
            {t.reason}
          </option>
          {contactReasonValues.map((reason) => (
            <option className="bg-white text-black" value={reason} key={reason}>
              {t.reasons[reason]}
            </option>
          ))}
        </select>
      </FieldError>

      <FieldError active={Boolean(errors.message)} message={t.required}>
        <textarea
          className={`${fieldClass} min-h-[150px] resize-none text-white rounded-[24px]`}
          placeholder={t.message}
          aria-label={t.message}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </FieldError>

      <div className="mt-8 grid justify-items-center gap-4">
        <button
          className="font-enigma inline-flex min-h-10 items-center justify-center rounded-full bg-[#333333] px-8 py-2 font-normal lowercase text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
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
