// Write your JS code here
import {Component} from 'react'
import './index.css'

class PortfolioAbout extends Component {
  render() {
    return (
      <div className="container1">
        <div>
          <div className="container">
            <div className="img-details">
              <div className="one">
                <h1 className="head">UI/UX DESIGNER</h1>
                <h1 className="head2">Hello, my name is Saikumar Marripally</h1>
                <p className="para">
                  I did a Full stack development course, as part of the course I
                  learned frontend and backend technologies. Iam Incredibly{' '}
                  <br />
                  Passoionate about coding and Technology. I have actively
                  engaged in coding projects and self-Learning.
                  <br /> The logic and Creativity Involved in coding have always
                  Fasainated me.
                </p>
                <div>
                  <button type="button" className="btn-size project">
                    Projects
                  </button>

                  <button type="button" className="btn-size linkedin">
                    LinkedIn
                  </button>
                </div>
              </div>
              <div className="two">
                <img
                  src="https://res.cloudinary.com/dwj82i4ec/image/upload/v1704441771/attachment_xabzdl.png"
                  alt="portfolio-img"
                  className="portfolio-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="addProjectContainer">
            <div className="inner-container">
              <h1 className="heading">Add Projects</h1>
              <form>
                <p className="paragraph">Project Name</p>
                <input className="input-sized" type="text" />
                <br />
                <p className="paragraph">Project Link</p>
                <input className="input-sized" type="text" />
                <br />
                <p className="paragraph">Description</p>
                <textarea rows="8" cols="60" className="textArea" />
                <br />
                <div className="btn-add">
                  <button type="submit" className="btn-add btn-sizze">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioAbout
