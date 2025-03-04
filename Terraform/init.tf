provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_storage_bucket" "website" {
  name     = var.bucket_name
  location = var.region
  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
  uniform_bucket_level_access = true
}

resource "google_storage_bucket_iam_binding" "public_access" {
  bucket  = google_storage_bucket.website.name
  role    = "roles/storage.objectViewer"
  members = ["allUsers"]
}

resource "google_compute_backend_bucket" "backend" {
  name        = "backend-bucket"
  bucket_name = google_storage_bucket.website.name
  enable_cdn  = true
}

resource "google_compute_url_map" "website" {
  name            = "website-map"
  default_service = google_compute_backend_bucket.backend.self_link
}

resource "google_compute_target_http_proxy" "http" {
  name    = "http-proxy"
  url_map = google_compute_url_map.website.self_link
}

resource "google_compute_global_forwarding_rule" "http" {
  name       = "http-rule"
  target     = google_compute_target_http_proxy.http.self_link
  port_range = "80"
}

variable "project_id" {}
variable "region" {
  default = "us-central1"
}
variable "bucket_name" {}

output "website_url" {
  value = "http://${google_compute_global_forwarding_rule.http.ip_address}"
}
