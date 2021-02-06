import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { change, registerDefault } from '../../types';

const Register = () => {
	const [change, setChange] = useState<change[]>([{ ...registerDefault }]);

	
	let handleChange = (e: change) => {
		setChange({ [e.target.name]: e.target.value });
	};
	return (
		<div>
			<Grid textAlign='center' verticalAlign='middle' className='app'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' icon color='blue' textAlign='center'>
						<Icon name='puzzle piece' color='blue' />
						Register for Evex Chat
					</Header>
					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								name='username'
								icon='user'
								iconPosition='left'
								placeholder='Username'
								onChange={handleChange}
								value={change.username}
								type='text'
							/>
							<Form.Input
								fluid
								name='email'
								icon='mail'
								iconPosition='left'
								placeholder='Email Address'
								onChange={handleChange}
								value={change.email}
								type='text'
							/>
							<Form.Input
								fluid
								name='password'
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								onChange={handleChange}
								value={change.password}
								type='password'
							/>
							<Form.Input
								fluid
								name='passwordConfirmation'
								icon='repeat'
								iconPosition='left'
								placeholder='Password Confirmation'
								onChange={handleChange}
								value={change.passwordConfirmation}
								type='password'
							/>

							<Button color='blue' fluid size='large'>
								Submit
							</Button>
						</Segment>
					</Form>
					<Message>
						Already a user? <Link to='/login'>Login</Link>
					</Message>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Register;
