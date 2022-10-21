import { LoginErrorMessage } from '../styled/ErrorMessage.styled';
import { LoginInput } from '../styled/Input.styled';
import { LoginInputContainer } from '../styled/Wrappers.styled';
import { InitialFormState, LoginFormInputNames } from './LoginForm';

interface Props {
   id: string;
   value: string;
   inputType: keyof Pick<InitialFormState, 'password' | 'email'>;
   stateKey: LoginFormInputNames;
   relatedErrorMessage: string;
   updateFormStateWithValue: (
      evt: React.ChangeEvent<HTMLInputElement>,
      inputName: LoginFormInputNames
   ) => void;
   placeholder: string;
}

const LoginSignUpInput: React.FC<Props> = ({
   id,
   value,
   relatedErrorMessage,
   updateFormStateWithValue,
   inputType,
   stateKey,
   placeholder,
}) => {
   return (
      <LoginInputContainer>
         <LoginInput
            data-testid={id}
            type={inputType}
            value={value}
            onChange={(evt) => updateFormStateWithValue(evt, stateKey)}
            placeholder={placeholder}
            error={!!relatedErrorMessage}
         />
         {relatedErrorMessage && (
            <LoginErrorMessage data-testid="login-email-error">
               {relatedErrorMessage}
            </LoginErrorMessage>
         )}
      </LoginInputContainer>
   );
};

export default LoginSignUpInput;
