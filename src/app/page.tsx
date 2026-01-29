import Link from "next/link";
import CharacterScene from "@/components/CharacterScene";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16 text-slate-100">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-sky-900/30">
        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,420px)_1fr]">
          <section className="order-2 flex flex-col justify-center gap-10 p-8 sm:p-12 lg:order-1">
            <div className="space-y-3 text-right">
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/80">
                ورود امن به فضای دیجیتال شما
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                خوش آمدید به پنل هوشمند
              </h1>
              <p className="text-base leading-8 text-white/70">
                برای دسترسی به سرویس‌های شخصی‌سازی‌شده و داشبورد تعاملی، اطلاعات
                حساب خود را وارد کنید و با خیال راحت ادامه دهید.
              </p>
            </div>

            <form className="flex flex-col gap-6 text-right" action="#" method="post">
              <label className="space-y-2" htmlFor="email">
                <span className="text-sm font-medium text-white/70">ایمیل</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60"
                />
              </label>

              <label className="space-y-2" htmlFor="password">
                <span className="text-sm font-medium text-white/70">رمز عبور</span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60"
                />
              </label>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-white/70">
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer rounded border border-white/40 bg-transparent accent-sky-400"
                  />
                  مرا به خاطر بسپار
                </label>
                <Link
                  href="#"
                  className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  رمز خود را فراموش کرده‌اید؟
                </Link>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 text-lg font-semibold text-slate-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              >
                ورود
              </button>
            </form>

            <p className="text-sm text-white/60">
              حساب کاربری ندارید؟{' '}
              <Link
                href="#"
                className="font-semibold text-sky-300 transition hover:text-sky-200"
              >
                همین حالا ثبت‌نام کنید
              </Link>
            </p>
          </section>

          <section className="relative order-1 min-h-[420px] overflow-hidden lg:order-2">
            <div className="absolute inset-0">
              <div className="absolute inset-0 rounded-tl-[3rem] bg-gradient-to-br from-sky-500/10 via-blue-500/0 to-cyan-400/5" />
              <CharacterScene />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_60%)]" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
