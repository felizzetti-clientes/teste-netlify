"use client";

import { FormEvent, useState } from "react";
import { UNITS } from "@/lib/content";

const SALES_WHATSAPP = UNITS[0].phones[1].href; // Alexandre — Vendas, Blumenau

export function QuoteForm({ context = "geral" }: { context?: string }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Olá! Meu nome é ${name || "—"}, de ${city || "—"}.`,
      context === "orcamento"
        ? "Gostaria de solicitar um orçamento de equipamentos TRG Fitness."
        : "Vim pelo site e gostaria de falar com a equipe TRG Fitness.",
      message ? `Mensagem: ${message}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const url = `${SALES_WHATSAPP}${SALES_WHATSAPP.includes("?") ? "&" : "?"}text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-muted">
          Nome
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-signal"
            placeholder="Seu nome"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-muted">
          Cidade / Estado
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-signal"
            placeholder="Ex.: Blumenau / SC"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-muted">
        Mensagem
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-signal"
          placeholder={
            context === "orcamento"
              ? "Conte quais equipamentos e para qual espaço (academia, condomínio, hotel...)"
              : "Como podemos ajudar?"
          }
        />
      </label>
      <button
        type="submit"
        className="mt-2 border border-signal bg-signal px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-muted">
        Ao enviar, você será direcionado ao WhatsApp da equipe comercial TRG
        Fitness com sua mensagem já preenchida.
      </p>
    </form>
  );
}
