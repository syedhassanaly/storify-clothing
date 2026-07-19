import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const { login, register, loginWithGoogle, loginWithFacebook, resetPassword, friendlyError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/";

  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [loginData, setLoginData] = useState({ email: "", password: "", remember: true });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const resetMessages = () => {
    setError("");
    setNotice("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    resetMessages();
    setLoading(true);
    try {
      await login(loginData);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    resetMessages();
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      await register(signupData);
      setNotice("Account created! We've sent you a verification email.");
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    resetMessages();
    if (!loginData.email) {
      setError("Enter your email above first, then click 'Forgot password?'");
      return;
    }
    try {
      await resetPassword(loginData.email);
      setNotice(`Password reset email sent to ${loginData.email}.`);
    } catch (err) {
      setError(friendlyError(err));
    }
  };

  const socialLogin = async (provider) => {
    resetMessages();
    setLoading(true);
    try {
      if (provider === "google") await loginWithGoogle();
      if (provider === "facebook") await loginWithFacebook();
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-[calc(100vh-64px)] flex items-center justify-center p-4 xs:p-5 pt-28 xs:pt-32">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-brand-orange-from to-brand-orange-to p-8 xs:p-10 sm:p-12 text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="Storify Clothes logo" width={50} height={42} className="rounded-xl" />
            <div className="text-xl xs:text-2xl font-semibold">Storify Clothes</div>
          </div>
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 xs:mb-5 leading-tight">
            Welcome to Your Fashion Destination
          </h2>
          <p className="text-sm xs:text-base opacity-95 leading-relaxed">
            Discover premium fashion items that combine style, comfort, and
            quality. Join our community and elevate your wardrobe today.
          </p>
        </div>

        {/* Right Panel */}
        <div className="p-6 xs:p-8 sm:p-12">
          <div className="flex gap-6 xs:gap-8 mb-6 xs:mb-10 border-b-2 border-gray-100">
            <button
              type="button"
              className={`text-base xs:text-lg font-semibold cursor-pointer pb-3 xs:pb-4 border-b-4 transition-all touch-manipulation ${
                activeTab === "login"
                  ? "text-[#e07a3e] border-[#e07a3e]"
                  : "text-gray-400 border-transparent hover:text-[#e07a3e]"
              }`}
              onClick={() => {
                setActiveTab("login");
                resetMessages();
              }}
            >
              Login
            </button>
            <button
              type="button"
              className={`text-base xs:text-lg font-semibold cursor-pointer pb-3 xs:pb-4 border-b-4 transition-all touch-manipulation ${
                activeTab === "signup"
                  ? "text-[#e07a3e] border-[#e07a3e]"
                  : "text-gray-400 border-transparent hover:text-[#e07a3e]"
              }`}
              onClick={() => {
                setActiveTab("signup");
                resetMessages();
              }}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
              {error}
            </div>
          )}
          {notice && (
            <div className="mb-5 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3">
              {notice}
            </div>
          )}

          {activeTab === "login" && (
            <div className="animate-fade-in">
              <form onSubmit={handleLogin}>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    minLength={6}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <div className="flex items-center justify-between mb-5 xs:mb-6">
                  <label className="flex items-center gap-2 text-sm cursor-pointer text-gray-700">
                    <input
                      type="checkbox"
                      checked={loginData.remember}
                      onChange={(e) => setLoginData({ ...loginData, remember: e.target.checked })}
                      className="cursor-pointer w-4 h-4 accent-[#e07a3e]"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-[#e07a3e] text-sm transition-opacity bg-transparent border-none cursor-pointer hover:opacity-80"
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 xs:py-4 bg-gradient-to-r from-[#e07a3e] to-[#d4621f] text-white rounded-2xl text-sm xs:text-base font-semibold transition-all active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#e07a3e]/30"
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </form>

              <SocialDivider label="or continue with" />
              <SocialButtons onClick={socialLogin} loading={loading} />
            </div>
          )}

          {activeTab === "signup" && (
            <div className="animate-fade-in">
              <form onSubmit={handleSignup}>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    required
                    minLength={6}
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <div className="mb-5 xs:mb-6">
                  <label className="block mb-2 text-gray-700 font-medium text-sm">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 xs:py-3.5 border-2 border-gray-200 rounded-xl text-sm xs:text-base transition-all outline-none focus:border-[#e07a3e] focus:ring-4 focus:ring-[#e07a3e]/10"
                  />
                </div>
                <label className="flex items-center gap-2 mb-5 xs:mb-6 text-sm cursor-pointer text-gray-700">
                  <input
                    type="checkbox"
                    required
                    checked={signupData.terms}
                    onChange={(e) => setSignupData({ ...signupData, terms: e.target.checked })}
                    className="cursor-pointer w-4 h-4 accent-[#e07a3e]"
                  />
                  I agree to the Terms & Conditions
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 xs:py-4 bg-gradient-to-r from-[#e07a3e] to-[#d4621f] text-white rounded-2xl text-sm xs:text-base font-semibold transition-all active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#e07a3e]/30"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>

              <SocialDivider label="or sign up with" />
              <SocialButtons onClick={socialLogin} loading={loading} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SocialDivider({ label }) {
  return (
    <div className="relative text-center my-6 xs:my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <span className="relative bg-white px-4 text-sm text-gray-400">{label}</span>
    </div>
  );
}

function SocialButtons({ onClick, loading }) {
  return (
    <div className="flex gap-3 xs:gap-4">
      <button
        type="button"
        disabled={loading}
        onClick={() => onClick("google")}
        className="flex-1 py-3 xs:py-3.5 border-2 border-gray-200 bg-white rounded-2xl text-xs xs:text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-60 touch-manipulation hover:border-[#e07a3e] hover:text-[#e07a3e]"
      >
        <span aria-hidden="true">🔍</span> Google
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={() => onClick("facebook")}
        className="flex-1 py-3 xs:py-3.5 border-2 border-gray-200 bg-white rounded-2xl text-xs xs:text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-60 touch-manipulation hover:border-[#e07a3e] hover:text-[#e07a3e]"
      >
        <span aria-hidden="true">📘</span> Facebook
      </button>
    </div>
  );
}
