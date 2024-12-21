import styles from "./FormHeader.module.scss";

type TwoChildren = [React.ReactNode, React.ReactNode];

export default function FormHeader({ children }: { children: TwoChildren }) {
  return <header className={styles.formHeader}>{children}</header>;
}
