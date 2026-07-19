import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AccountPage() {
  const { user, logout, resendVerification } = useAuth();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleResend = async () => {
    setSending(true);
    try {
      await resendVerification();
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const initials = (user?.displayName || user?.email || "?")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="max-w-3xl mx-auto px-4 xs:px-6 pt-28 xs:pt-32 pb-12 xs:pb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 xs:p-8 sm:p-10">
        <div className="flex items-center gap-4 xs:gap-5 mb-8">
          <div className="w-14 h-14 xs:w-16 xs:h-16 rounded-full bg-gradient-to-br from-brand-orange-from to-brand-orange-to text-white flex items-center justify-center text-lg xs:text-xl font-bold shrink-0">
            {initials}
          </div>
          <div>
            <h1 className="text-xl xs:text-2xl font-bold text-brand-dark">
              {user?.displayName || "My Account"}
            </h1>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        </div>

        {!user?.emailVerified && (
          <div className="mb-8 flex flex-col xs:flex-row xs:items-center justify-between gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 text-sm">
            <span>
              {sent
                ? "Verification email sent — check your inbox."
                : "Your email address isn't verified yet."}
            </span>
            <button
              onClick={handleResend}
              disabled={sending || sent}
              className="shrink-0 bg-amber-600 active:bg-amber-700 disabled:opacity-60 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors touch-manipulation hover:bg-amber-700"
            >
              {sending ? "Sending..." : sent ? "Sent" : "Resend email"}
            </button>
          </div>
        )}

        <dl className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6 mb-10 text-sm">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <dt className="text-gray-500 mb-1">Account created</dt>
            <dd className="font-semibold text-brand-dark">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "—"}
            </dd>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <dt className="text-gray-500 mb-1">Last sign-in</dt>
            <dd className="font-semibold text-brand-dark">
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                : "—"}
            </dd>
          </div>
        </dl>

        <button
          onClick={handleLogout}
          className="w-full xs:w-auto bg-brand-dark active:bg-black text-white font-semibold px-6 py-3 rounded-xl transition-colors touch-manipulation hover:bg-black"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
