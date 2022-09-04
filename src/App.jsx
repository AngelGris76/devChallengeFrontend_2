import Input from './components/Input';
import PhoneIcon from './components/icons/PhoneIcon';
import LockIcon from './components/icons/LockIcon';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.appContainer}>
      <h2>Inputs</h2>
      <main>
        <div className={style.inputContainer}>
          <span>{`<Input />`}</span>
          <Input label='Label' placeholder='Placeholder' />
        </div>
        <div className={style.inputContainer}>
          <span>{`<Input error />`}</span>
          <Input label='Label' placeholder='Placeholder' error />
        </div>
        <div className={style.inputContainer}>
          <span>{`<Input disabled />`}</span>
          <Input label='Label' placeholder='Placeholder' disabled />
        </div>
        <div className={style.helperText}>
          <div className={style.inputContainer}>
            <span>{`<Input helperText='Some interesting text' />`}</span>
            <Input
              label='Label'
              placeholder='Placeholder'
              helperText='Some interesting text'
            />
          </div>
          <div className={style.inputContainer}>
            <span>{`<Input helperText='Some interesting text' error />`}</span>
            <Input
              label='Label'
              placeholder='Placeholder'
              helperText='Some interesting text'
              error
            />
          </div>
        </div>
        <div className={style.iconInputs}>
          <div className={style.inputContainer}>
            <span>{`<Input startIcon={PhoneIcon} />`}</span>
            <Input
              label='Label'
              placeholder='Placeholder'
              startIcon={PhoneIcon}
            />
          </div>
          <div className={style.inputContainer}>
            <span>{`<Input endIcon={LockIcon} />`}</span>
            <Input label='Label' placeholder='Placeholder' endIcon={LockIcon} />
          </div>
        </div>
        <div className={style.inputContainer}>
          <span>{`<Input value='Text' />`}</span>
          <Input label='Label' value='Text' />
        </div>
        <div className={style.sizeInputs}>
          <div className={style.inputContainer}>
            <span>{`<Input size='sm' />`}</span>
            <Input label='Label' placeholder='Placeholder' size='sm' />
          </div>
          <div className={style.inputContainer}>
            <span>{`<Input size='md' />`}</span>
            <Input label='Label' placeholder='Placeholder' size='md' />
          </div>
        </div>
        <div className={style.inputContainer}>
          <span>{`<Input fullWidth />`}</span>
          <Input label='Label' value='Text' fullWidth />
        </div>
        <div className={style.inputContainer}>
          <span>{`<Input multiline rows='4' />`}</span>
          <Input label='Label' value='Text' multiline rows='4' />
        </div>
      </main>
      <footer className={style.footer}>
        <p>Created by Sebatian Smuraglia</p>
      </footer>
    </div>
  );
};

export default App;
