const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer bg-base-200/60 p-10">
        <form className="gap-6">
          <div className="flex items-center gap-2 text-xl font-bold">
           
            <span>HostelMate</span>
          </div>
          <p className="text-base-content">
            Student friendly & highly
            <br />
             fresh meals around the hostel.
          </p>
          <fieldset>
            <label className="label label-text" htmlFor="subscribeNewsletter">
              Report to hostelMate
            </label>
            <div className="flex flex-wrap sm:flex-nowrap w-full gap-1">
              <input
                className="input input-sm"
                id="subscribeNewsletter"
                placeholder="johndoe@gmail.com"
              />
              <button className="btn btn-sm btn-primary">Report</button>
            </div>
          </fieldset>
        </form>
        <nav className="text-base-content">
          <h6 className="footer-title">Services</h6>
          <a href="#" className="link link-hover">
            Pick Up
          </a>
          <span>
            <a href="#" className="link link-hover">
              Meals
            </a>
            <span className="badge ms-2 badge-sm badge-primary">New</span>
          </span>
          <a href="#" className="link link-hover">
            Delivery
          </a>
          <a href="#" className="link link-hover">
            Advertisement
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Company</h6>
          <a href="#" className="link link-hover">
            About us
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
          <a href="#" className="link link-hover">
            Jobs
          </a>
          <a href="#" className="link link-hover">
            Press kit
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Legal</h6>
          <a href="#" className="link link-hover">
            Terms of use
          </a>
          <a href="#" className="link link-hover">
            Privacy policy
          </a>
          <a href="#" className="link link-hover">
            Cookie policy
          </a>
        </nav>
      </footer>
      <footer className="footer bg-base-200/60 border-base-content/25 border-t px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <aside className="grid-flow-col items-center">
            <p>
              ©2024{" "}
              <a className="link link-hover font-medium" href="#">
                FlyonUI
              </a>
            </p>
          </aside>
          <div className="flex h-5 gap-4">
            <a href="#" className="link" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
