
export default (props) => {

  return (
    <pre>
      {JSON.stringify(props, undefined, 2)}
    </pre>
  );
}
