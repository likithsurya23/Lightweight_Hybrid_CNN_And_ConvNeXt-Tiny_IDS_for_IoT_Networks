import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ids_backend.settings")
django.setup()

from django.contrib.auth.models import User

def create_users():
    # Admin User
    if not User.objects.filter(username="admin").exists():
        admin = User.objects.create_superuser("admin", "admin@hybrid-ids.com", "adminpassword")
        print("Created admin user (Username: admin, Password: adminpassword)")
    else:
        print("Admin user already exists")

    # Standard User
    if not User.objects.filter(username="user").exists():
        user = User.objects.create_user("user", "user@hybrid-ids.com", "userpassword")
        print("Created standard user (Username: user, Password: userpassword)")
    else:
        print("Standard user already exists")

if __name__ == "__main__":
    create_users()
