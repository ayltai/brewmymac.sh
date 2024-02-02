data "archive_file" "backend" {
  type        = "zip"
  source_dir  = "../backend"
  output_path = "./backend.zip"

  excludes = [
    "node_modules",
    ".gcloudignore",
    ".gitignore",
    "src/apis.test.*",
    "babel.config.js",
    "package-lock.json",
    "pnpm-lock.yaml",
    "sonar-project.properties",
  ]
}

resource "google_cloudfunctions_function" "backend" {
  name                  = "${var.project_id}-backend"
  runtime               = var.backend_runtime
  available_memory_mb   = var.backend_memory
  entry_point           = "api"
  source_archive_bucket = google_storage_bucket.backend.name
  source_archive_object = google_storage_bucket_object.backend.name
  timeout               = var.backend_timeout
  trigger_http          = true
  service_account_email = google_service_account.backend.email

  depends_on = [
    module.project-services,
  ]
}
