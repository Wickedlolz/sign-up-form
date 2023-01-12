import { memo, useState } from 'react';
import * as authService from '../../services/auth';
import Field from '../Field/Field';
import ErrorField from '../ErrorField/ErrorField';

import styles from './SignUp.module.css';
import { isPasswordsIdentical, validateFields } from '../../utils/helpers';

function SignUp({ notify }) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
        age: '',
        birthday: '',
        biography: '',
        profilePicture: '',
        jobRole: 'frontEnd',
        interests: {
            development: false,
            design: false,
            business: false,
        },
    });

    const [errors, setErrors] = useState({
        isPasswordsIdentical: true,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        // getting object with errors
        const formErrors = validateFields(formState);

        // checking if in formErrors object have not valid fields
        if (Object.keys(formErrors).length > 0) {
            setErrors((state) => ({
                ...formErrors,
                isPasswordsIdentical: true,
            }));

            return;
        }

        const isIdentical = isPasswordsIdentical(
            formState.password,
            formState.rePassword
        );

        // set isPasswordsIdentical based on result from isPasswordsIdentical function
        setErrors({
            isPasswordsIdentical: isIdentical,
        });

        if (!isIdentical) return;

        authService.signUp(formState);
        notify('Successfully create your account!');
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value =
            name === 'interests' ? event.target.id : event.target.value;

        if (name === 'interests') {
            setFormState((state) => ({
                ...state,
                interests: {
                    ...state.interests,
                    [value]: event.target.checked,
                },
            }));
        } else {
            setFormState((state) => ({
                ...state,
                [name]: value,
            }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <h3 className={styles.subTitle}>
                <span className={styles.circle}>1</span> Your basic info
            </h3>
            <Field
                labelFor="name"
                labelText="Name"
                type="text"
                inputName="name"
                value={formState.name}
                onChange={handleChange}
            />
            {errors.name && <ErrorField errorMessage={errors.name} />}
            <Field
                labelFor="email"
                labelText="Email"
                type="email"
                inputName="email"
                value={formState.email}
                onChange={handleChange}
            />
            {errors.email && <ErrorField errorMessage={errors.email} />}
            <Field
                labelFor="password"
                labelText="Password"
                type="password"
                inputName="password"
                value={formState.password}
                onChange={handleChange}
            />
            {errors.password && <ErrorField errorMessage={errors.password} />}
            <Field
                labelFor="rePassword"
                labelText="Re-Password"
                type="password"
                inputName="rePassword"
                value={formState.rePassword}
                onChange={handleChange}
            />
            {errors.rePassword && (
                <ErrorField errorMessage={errors.rePassword} />
            )}
            {!errors?.isPasswordsIdentical && !errors?.rePassword ? (
                <ErrorField errorMessage="Password's not identical!" />
            ) : null}
            <p className={styles.heading}>Age</p>
            <Field
                labelFor="underThirteen"
                labelText="Under 13"
                type="radio"
                inputName="age"
                value="underThirteen"
                onChange={handleChange}
            />
            <Field
                labelFor="thirteenOrOlder"
                labelText="13 or older"
                type="radio"
                inputName="age"
                value="thirteenOrOlder"
                onChange={handleChange}
            />
            {errors.age && <ErrorField errorMessage={errors.age} />}
            <Field
                labelFor="birthday"
                labelText="Birthday"
                type="date"
                inputName="birthday"
                value={formState.birthday}
                onChange={handleChange}
            />
            {errors.birthday && <ErrorField errorMessage={errors.birthday} />}
            <h3 className={styles.subTitle}>
                <span className={styles.circle}>2</span> Your profile
            </h3>
            <label htmlFor="biography" className={styles.labelTitle}>
                Biography
            </label>
            <textarea
                className={styles.textarea}
                name="biography"
                id="biography"
                value={formState.biography}
                onChange={handleChange}
                cols="30"
                rows="10"
            ></textarea>
            {errors.biography && <ErrorField errorMessage={errors.biography} />}
            <Field
                labelFor="profilePicture"
                labelText="Profile Picture"
                type="file"
                inputName="profilePicture"
                value={formState.profilePicture}
                onChange={handleChange}
            />
            {errors.profilePicture && (
                <ErrorField errorMessage={errors.profilePicture} />
            )}
            <label htmlFor="jobRole" className={styles.labelTitle}>
                Job Role
            </label>
            <select
                name="jobRole"
                id="jobRole"
                value={formState.jobRole}
                onChange={handleChange}
            >
                <option value="frontEnd">Front-End Development</option>
                <option value="backEnd">Back-End Development</option>
                <option value="devOps">DevOps Engineers</option>
                <option value="qa">QA Automation Engineer</option>
            </select>
            {errors.jobRole && <ErrorField errorMessage={errors.jobRole} />}
            <p className={styles.heading}>Interests</p>
            <Field
                labelFor="interests"
                labelText="Development"
                type="checkbox"
                inputName="interests"
                value={formState.interests}
                onChange={handleChange}
                id="development"
            />
            <Field
                labelFor="interests"
                labelText="Design"
                type="checkbox"
                inputName="interests"
                value={formState.interests}
                onChange={handleChange}
                id="design"
            />
            <Field
                labelFor="interests"
                labelText="Business"
                type="checkbox"
                inputName="interests"
                value={formState.interests}
                onChange={handleChange}
                id="business"
            />
            {errors.interests && <ErrorField errorMessage={errors.interests} />}
            <button className={styles.signUpBtn}>Sign Up</button>
        </form>
    );
}

export default memo(SignUp);
