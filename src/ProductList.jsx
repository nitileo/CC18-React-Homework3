export default function ProductList(props) {
  const { data } = props;
  return (
    <div className="w-3/5 mx-auto">
      {data.map((el) => (
        <p key={el.id} className="flex flex-col my-2 bg-red-200 rounded p-1">
          {el?.title} | {el.category} | ${el.price}
        </p>
      ))}
    </div>
  );
}
