import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";
import { NextRequest, NextResponse } from "next/server";

const client = new LexRuntimeV2Client({
  region: process.env.AWS_REGION ?? "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json();

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "Invalid sessionId" }, { status: 400 });
  }

  try {
    const command = new RecognizeTextCommand({
      botId: process.env.LEX_BOT_ID ?? "OKOU78G40B",
      botAliasId: process.env.LEX_BOT_ALIAS_ID ?? "TSTALIASID",
      localeId: process.env.LEX_LOCALE_ID ?? "en_AU",
      sessionId,
      text: message.trim(),
    });

    const response = await client.send(command);

    const messages = (response.messages ?? []).map((m) => m.content ?? "");

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Lex error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
