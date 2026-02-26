// app/components/AuthGate.tsx

type AuthGateProps = {
  children: React.ReactNode;
};

/**
 * AuthGate is a placeholder component.
 * Since this project has no backend, no Firebase, and no real authentication,
 * this component simply renders its children without restriction.
 */
export default function AuthGate({ children }: AuthGateProps) {
  return <>{children}</>;
}
