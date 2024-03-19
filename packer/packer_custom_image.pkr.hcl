packer {
  required_plugins {
    googlecompute = {
      source  = "github.com/hashicorp/googlecompute"
      version = "~> 1"
    }
  }
}

source "googlecompute" "custom_image" {
  project_id              = var.proj_id
  source_image            = var.src_img
  source_image_family     = var.src_img_fmly
  zone                    = var.zone
  region                  = var.region
  ssh_username            = var.ssh_username
  machine_type            = var.machine_type
  image_name              = var.img_name
  image_description       = var.img_description
  disk_size               = var.disk_size
  disk_type               = var.disk_type
  image_family            = var.img_family
  image_storage_locations = var.img_storage_locations
  image_project_id        = var.proj_id
  network                 = var.network
}

build {
  sources = [
    "source.googlecompute.custom_image"
  ]

  provisioner "file" {
    source      = "webapp.zip"
    destination = "/tmp/"
  }

  provisioner "file" {
    source      = "./packer/webapp.service"
    destination = "/tmp/"
  }

  provisioner "file" {
    source      = "./packer/config.yaml"
    destination = "/tmp/"
  }

  provisioner "shell" {
    scripts = [
      "./shell_scripts/s1_os_update.sh",
      "./shell_scripts/s2_install_dependencies.sh",
      "./shell_scripts/s3_create_user.sh",
      "./shell_scripts/s4_initialize_webapp.sh",
      "./shell_scripts/s5_systemd.sh"
    ]
  }

}

variable "proj_id" {
  description = "The project ID where the image will be created"
  type        = string
  default     = "project_id"
}

variable "src_img" {
  description = "The source image used for creating the custom image"
  type        = string
  default     = "centos-stream-8-v20240110"
}

variable "src_img_fmly" {
  description = "The family of the source image"
  type        = string
  default     = "centos-stream-8"
}

variable "zone" {
  description = "The zone in which the instance will be created"
  type        = string
  default     = "us-east1-b"
}

variable "region" {
  description = "The region where the instance will be created"
  type        = string
  default     = "us-east-1"
}

variable "ssh_username" {
  description = "The SSH username for connecting to the instance"
  type        = string
  default     = "packer"
}

variable "machine_type" {
  description = "The machine type for the instance"
  type        = string
  default     = "n1-standard-1"
}

variable "img_name" {
  description = "The name of the custom image to be created. Use '{{timestamp}}' to include timestamp"
  type        = string
  default     = "csye6225-webapp-{{timestamp}}"
}

variable "img_description" {
  description = "The description of the custom image"
  type        = string
  default     = "csye6225 custom image"
}

variable "disk_size" {
  description = "The size of the disk in GB"
  type        = number
  default     = 20
}

variable "disk_type" {
  description = "The type of disk (e.g., pd-standard, pd-ssd)"
  type        = string
  default     = "pd-standard"
}

variable "img_family" {
  description = "The family of the custom image"
  type        = string
  default     = "csye6225-custom-image"
}

variable "img_storage_locations" {
  description = "The list of storage locations for the image"
  type        = list(string)
  default     = ["us"]
}

variable "network" {
  description = "The network for the instance"
  type        = string
  default     = "default"
}