export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Us</h3>
            <p className="text-muted-foreground">Phone: (555) 123-4567</p>
            <p className="text-muted-foreground">Email: info@rhinogaragedoors.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Service Areas</h3>
            <p className="text-muted-foreground">Greater Metropolitan Area</p>
            <p className="text-muted-foreground">Surrounding Counties</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
            <p className="text-muted-foreground">24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Rhino Garage Doors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
