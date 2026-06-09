export const resetPasswordTemplate = (
  username,
  resetLink,
  passwordResetExpires,
) => {
  return `
      <div
        style="
        font-family:Arial;
        padding:20px;
      "
      >

        <h2>
          مرحباً ${username}
        </h2>

        <p>
          لقد طلبت إعادة تعيين
          كلمة المرور الخاصة بك.
        </p>

        <p>
          اضغط على الزر التالي:
        </p>

        <a
          href="${resetLink}"
          style="
            background:#2563eb;
            color:white;
            padding:12px 20px;
            text-decoration:none;
            border-radius:5px;
          "
        >
          إعادة تعيين كلمة المرور
        </a>

        <p>
          ينتهي الرابط بعد ${passwordResetExpires}.
        </p>

      </div>
  `;
};
