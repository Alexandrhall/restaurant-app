interface IBookFromProps {
  date: string;
  time: string;
}

export const BookingForm = (props: IBookFromProps) => {
  return (
    <>
      <p>{props.date}</p>
      <p>{props.time}</p>
    </>
  );
};
