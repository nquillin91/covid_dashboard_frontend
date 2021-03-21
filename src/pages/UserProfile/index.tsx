import userService from '../../services/UserService';
import UserProfileModel from '../../models/UserProfile';
import React, { useState } from 'react';

export default function UserProfile() {
	const [userProfileModel, setUserProfileModel] = useState(new UserProfileModel());

	userService.getUserProfile().then(userProfileModel => {
		let model = Object.assign(new UserProfileModel(), JSON.parse(userProfileModel));
		setUserProfileModel(model);
	});

	return (
		<div>
	  		User Profile Page
	  		<p>Hi {userProfileModel.username}!</p>
		</div>
	);
}