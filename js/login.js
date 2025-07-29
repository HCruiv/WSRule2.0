document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Cegah reload

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Email dan password harus diisi!");
            return;
        }

        // Daftar akun simulasi
        const users = [
            { email: "admin", password: "admin123", role: "admin", redirect: "admin/admin.html" },
            { email: "hc", password: "hc123", role: "hc", redirect: "hc/hc.html" },
            { email: "atasan", password: "atasan123", role: "atasan", redirect: "atasan/atasan.html" }
        ];

        // Cek apakah email & password cocok persis
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            
            window.location.href = user.redirect;
        } else {
            alert("Email atau password salah!");
        }
    });
});
