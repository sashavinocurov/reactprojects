import React from 'react';
import PropTypes from 'prop-types';


//stateless function method
// const Header = ({tagline, age}) also can be used 
const Header = (props) => (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
                {/* <span>tagline</span>    ------ continuation of another method. */}
            </h3>
        </header>
    );

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};
// Jsx component
// class Header extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <header className="top">
//                     <h1>
//                         Catch
//                         <span className="ofThe">
//                             <span className="of">Of</span>
//                             <span className="the">The</span>
//                         </span>
//                         Day
//                     </h1>
//                     <h3 className="tagline">
//                         <span>{this.props.tagline}</span>
//                     </h3>
//                 </header>
//             </React.Fragment>
//         )
//     }
// }

export default Header;