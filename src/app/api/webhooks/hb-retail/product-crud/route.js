import { z } from 'zod';
import { NextResponse } from 'next/server';

// Define the schema for product properties


// Define the main product schema
const CreateProductSchema = z.object({
  id: z.number(),
  ad: z.string(),
  barkod: z.string(),
  qiymet: z.number(),
  qaliq: z.number(),
  oz1: z.string(),
  oz2: z.string(),
  oz3: z.string(),
  oz4: z.string(),
  oz5: z.string(),
  oz6: z.string(),
  oz7: z.string(),
});
const UpdateProductSchema = z.object({
  id: z.number(),
  ad: z.string().optional(),
  barkod: z.string().optional(),
  qiymet: z.number().optional(),
  qaliq: z.number().optional(),
  oz1: z.string().optional(),
  oz2: z.string().optional(),
  oz3: z.string().optional(),
  oz4: z.string().optional(),
  oz5: z.string().optional(),
  oz6: z.string().optional(),
  oz7: z.string().optional(),
});

const DeleteProductSchema = z.object({
  id: z.number().refine((val) => val === -1, {
    message: "ID must be -1"
  }),
});


const BodySchema = z.union([CreateProductSchema, UpdateProductSchema, DeleteProductSchema]);

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body against the schema
    const validatedData = BodySchema.parse(body);
    console.log(validatedData);
    // Here you would typically save the product to your database
    // For now, we'll just return the validated data
    return NextResponse.json({
      success: true,
      data: validatedData
    }, { status: 200 });

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        details: error.errors
      }, { status: 400 });
    }

    // Handle other errors
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      message: error.message
    }, { status: 500 });
  }
}
