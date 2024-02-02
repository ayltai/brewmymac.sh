resource "google_firestore_database" "this" {
  name                        = var.project_id
  location_id                 = var.region
  type                        = "FIRESTORE_NATIVE"
  concurrency_mode            = "PESSIMISTIC"
  app_engine_integration_mode = "DISABLED"

  depends_on = [
    module.project-services,
  ]
}
