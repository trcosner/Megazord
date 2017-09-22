import Loadable from 'react-loadable';
import { RotaingPlaneLoading } from "styled-spinkit";

const asyncComponent = fn => Loadable({
    loader: fn,
    loading: RotaingPlaneLoading
});

export default asyncComponent;