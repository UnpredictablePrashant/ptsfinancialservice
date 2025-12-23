import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/email';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());
    await sendContactEmail(payload);
    console.info('✅ Contact submission received', payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', issues: error.issues }, { status: 422 });
    }
    console.error('❌ Contact submission failed', error);
    return NextResponse.json({ error: 'Unable to process request' }, { status: 500 });
  }
}
