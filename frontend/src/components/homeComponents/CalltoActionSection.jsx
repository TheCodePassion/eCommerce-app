function CalltoActionSection() {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2> ✨ Don’t miss the opportunity to learn more! ✨</h2>
              <p>Sign up free and get the latest discount information</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="I'm in" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CalltoActionSection
