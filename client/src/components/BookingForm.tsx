interface IBookFromProps {
  date: string;
  time: string;
}

export const BookingForm = (props: IBookFromProps) => {
  return (
    <>
      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="time" value={props.time} />
        <input type="text" name="date" value={props.date} />
        <input type="text" name="name" placeholder="First Name" />
        <input type="number" name="phone" placeholder="Phone number" />
        <input type="email" name="email" placeholder="Email" />
        <input
          type="number"
          name="persons"
          placeholder="Persons"
          max={6}
          min={1}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
