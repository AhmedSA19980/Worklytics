import ResettingPasswordForm from "@/features/password/resetpass";


export default function ResettingPassword() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <ResettingPasswordForm />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom- -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-0"
      >
        <div
          style={{
            clipPath:
              "clip-path: polygon(90% 90% ,61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          className="relative right-[calc(40%-5rem)] aspect-1155/678 w-200.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff000] to-[#9089fc] opacity-30 sm:left-[calc(50%-15rem)] sm:w-288.75"
        ></div>
      </div>
    </div>
  );
}
