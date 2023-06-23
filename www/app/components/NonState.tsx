/// <reference path="../References.d.ts"/>
import * as React from 'react';
import * as Constants from '../Constants';

interface Props {
	hidden: boolean;
	iconClass: string;
	title: string;
	description?: string;
}

interface State {
	initialized: boolean;
}

const css = {
	state: {
		height: 'auto',
	} as React.CSSProperties,
};

export default class NonState extends React.Component<Props, State> {
	timeout: number;

	constructor(props: any, context: any) {
		super(props, context);
		this.state = {
			initialized: false,
		};
	}

	componentDidMount(): void {
		this.timeout = window.setTimeout((): void => {
			this.setState((prevState) => ({
				...prevState,
				initialized: true,
			}));
		}, Constants.loadDelay);
	}

	componentWillUnmount(): void {
		if (this.timeout) {
			window.clearTimeout(this.timeout);
		}
	}

	render(): JSX.Element {
		let description: JSX.Element;
		if (this.props.description) {
			description = <div className="bp3-non-ideal-state-description">
				{this.props.description}
			</div>;
		}

		return <div
			className="bp3-non-ideal-state"
			style={css.state}
			hidden={this.props.hidden || !this.state.initialized}
		>
			<div className="bp3-non-ideal-state-visual bp3-non-ideal-state-icon">
				<span className={'bp3-icon ' + this.props.iconClass}/>
			</div>
			<h4 className="bp3-non-ideal-state-title">{this.props.title}</h4>
			{description}
		</div>;
	}
}