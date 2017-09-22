import React from 'react'
import PropTypes from 'prop-types'
import warning from 'warning'
import invariant from 'invariant'
import { matchPath } from 'react-router-dom';

class Layout extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({
            route: PropTypes.object.isRequired
        }).isRequired
    };

    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object
    };

    componentWillMount() {
        invariant(
            this.context.router,
            'You should not use <Layout> outside a <Router>'
        );
    }

    componentWillReceiveProps(nextProps) {
        warning(
            !(nextProps.location && !this.props.location),
            '<Layout> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
        );

        warning(
            !(!nextProps.location && this.props.location),
            '<Layout> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
        );
    }

    render() {
        const { route } = this.context.router;
        const { component: Component, render, children } = this.props;
        const location = this.props.location || route.location;

        let match, child;
        React.Children.forEach(children, element => {
            if (!React.isValidElement(element)) return;

            const {
                path: pathProp,
                exact,
                strict,
                sensitive,
                from
            } = element.props;
            const path = pathProp || from;

            if (match == null) {
                child = element;
                match = path
                    ? matchPath(location.pathname, {
                          path,
                          exact,
                          strict,
                          sensitive
                      })
                    : route.match;
            }
        });

        if (!match) {
            return null;
        }

        const clonedChild = React.cloneElement(child, {
            location,
            computedMatch: match
        });

        if (Component) {
            return <Component>{clonedChild}</Component>;
        }

        if (render) {
            return render(clonedChild);
        }
    }
}

export default Layout;