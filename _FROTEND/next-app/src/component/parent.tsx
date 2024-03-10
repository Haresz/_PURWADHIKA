export default function Parent(props: any) {
  const { children } = props;

  return (
    <div
      className={props.className}
      style={{ border: "1px solid black", padding: 20 }}
    >
      {children}
    </div>
  );
}
