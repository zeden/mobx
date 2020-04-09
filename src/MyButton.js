import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer,inject} from 'mobx-react';
import {action} from 'mobx';
import {
  Form,
  Row,
  Button,
  Select,
  Radio,
  Input,
  Divider,
  message
} from "antd";
import "antd/dist/antd.css";

@inject("store")
@observer
export default class MyButton extends React.Component {
	
	render() {
		return (<Button type="primary">test{this.props.store.status	}</Button>);
	}
}