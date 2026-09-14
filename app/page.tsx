import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Show when="signed-out">
          <SignInButton>
            <button className={styles.buttonGhost}>Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className={styles.buttonPrimary}>Sign up</button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Bad Agent</h1>
        <p className={styles.tagline}>Coming soon.</p>
      </main>
    </>
  );
}
