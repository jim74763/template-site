ALTER TABLE "generated_sites" ADD COLUMN "schema_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "generated_sites" ALTER COLUMN "schema_version" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "generated_sites" ADD CONSTRAINT "generated_sites_template_check" CHECK ("generated_sites"."template" in ('dental-care', 'artisan-bakery', 'organic-market', 'whole-foods', 'construction-pro'));--> statement-breakpoint
ALTER TABLE "generated_sites" ADD CONSTRAINT "generated_sites_schema_version_check" CHECK ("generated_sites"."schema_version" >= 0);--> statement-breakpoint
ALTER TABLE "generated_sites" ADD CONSTRAINT "generated_sites_content_object_check" CHECK (jsonb_typeof("generated_sites"."content") = 'object');
