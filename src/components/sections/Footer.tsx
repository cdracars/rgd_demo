export function Footer() {
  return (
    <footer className="bg-rhino-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@rhinogaragedoors.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <p>Greater Metropolitan Area</p>
            <p>Surrounding Counties</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-rhino-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Rhino Garage Doors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
