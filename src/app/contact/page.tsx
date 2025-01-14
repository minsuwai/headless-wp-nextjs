export default function Page() {
  return (
    <div>
      <h1 className="text-xl mb-4">Contact Us</h1>
      <p className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        exercitationem, distinctio dicta amet, autem voluptate sunt minus velit
        quaerat repudiandae vero at vel cum reiciendis eligendi cumque molestiae
        asperiores nostrum voluptates. Aliquid labore debitis iure.
      </p>

      <div className="flex flex-col md:flex-row justify-center mb-6">
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Address</h2>
          <p>123 London St, UK</p>
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Phone</h2>
          <p>+(00) 123 456 789</p>
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Email</h2>
          <p>example@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
