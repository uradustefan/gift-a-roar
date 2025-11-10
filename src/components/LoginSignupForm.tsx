import { useState } from 'react';
import { User, Lock, Mail, Github, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginSignupForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        .auth-container {
          position: relative;
          width: 850px;
          height: 550px;
          background: hsl(var(--card));
          margin: 20px;
          border-radius: 30px;
          box-shadow: 0 0 30px rgba(0, 0, 0, .2);
          overflow: hidden;
        }

        .auth-container h1 {
          font-size: 36px;
          margin: -10px 0;
          color: hsl(var(--foreground));
        }

        .auth-container p {
          font-size: 14.5px;
          margin: 15px 0;
          color: hsl(var(--muted-foreground));
        }

        .form-box {
          position: absolute;
          right: 0;
          width: 50%;
          height: 100%;
          background: hsl(var(--card));
          display: flex;
          align-items: center;
          color: hsl(var(--foreground));
          text-align: center;
          padding: 40px;
          z-index: 1;
          transition: .6s ease-in-out 1.2s, visibility 0s 1s;
        }

        .auth-container.active .form-box {
          right: 50%;
        }

        .form-box.register {
          visibility: hidden;
        }

        .auth-container.active .form-box.register {
          visibility: visible;
        }

        .input-box {
          position: relative;
          margin: 30px 0;
        }

        .input-box input {
          width: 100%;
          padding: 13px 50px 13px 20px;
          background: hsl(var(--muted));
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 16px;
          color: hsl(var(--foreground));
          font-weight: 500;
        }

        .input-box input::placeholder {
          color: hsl(var(--muted-foreground));
          font-weight: 400;
        }

        .input-box i {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          color: hsl(var(--muted-foreground));
        }

        .forgot-link {
          margin: -15px 0 15px;
          text-align: right;
        }

        .forgot-link a {
          font-size: 14.5px;
          color: hsl(var(--primary));
          transition: var(--transition-smooth);
        }

        .forgot-link a:hover {
          text-decoration: underline;
        }

        .auth-btn {
          width: 100%;
          height: 48px;
          background: hsl(var(--primary));
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .1);
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: hsl(var(--primary-foreground));
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .auth-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icons a {
          display: inline-flex;
          padding: 10px;
          border: 2px solid hsl(var(--border));
          border-radius: 8px;
          font-size: 24px;
          color: hsl(var(--foreground));
          transition: var(--transition-smooth);
        }

        .social-icons a:hover {
          border-color: hsl(var(--primary));
          transform: translateY(-2px);
        }

        .toggle-box {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .toggle-box::before {
          content: '';
          position: absolute;
          left: -250%;
          width: 300%;
          height: 100%;
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
          border-radius: 150px;
          z-index: 2;
          transition: 1.8s ease-in-out;
        }

        .auth-container.active .toggle-box::before {
          left: 50%;
        }

        .toggle-panel {
          position: absolute;
          width: 50%;
          height: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 2;
          transition: .6s ease-in-out;
        }

        .toggle-panel h1 {
          color: #fff;
        }

        .toggle-panel p {
          color: rgba(255, 255, 255, 0.9);
        }

        .toggle-panel.toggle-left {
          left: 0;
          transition-delay: 1.2s;
        }

        .auth-container.active .toggle-panel.toggle-left {
          left: -50%;
          transition-delay: .6s;
        }

        .toggle-panel.toggle-right {
          right: -50%;
          transition-delay: .6s;
        }

        .auth-container.active .toggle-panel.toggle-right {
          right: 0;
          transition-delay: 1.2s;
        }

        .toggle-panel p {
          margin-bottom: 20px;
        }

        .toggle-panel .auth-btn {
          width: 160px;
          height: 46px;
          background: transparent;
          border: 2px solid #fff;
          box-shadow: none;
        }

        .toggle-panel .auth-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .back-link {
          text-align: center;
          margin-top: 20px;
        }

        .back-link a {
          color: hsl(var(--primary));
          text-decoration: none;
          font-size: 14px;
          transition: var(--transition-smooth);
        }

        .back-link a:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 650px) {
          .auth-container {
            height: calc(100vh - 40px);
            width: 100%;
            max-width: 100%;
          }

          .form-box {
            bottom: 0;
            width: 100%;
            height: 70%;
          }

          .auth-container.active .form-box {
            right: 0;
            bottom: 30%;
          }

          .toggle-box::before {
            left: 0;
            top: -270%;
            width: 100%;
            height: 300%;
            border-radius: 20vw;
          }

          .auth-container.active .toggle-box::before {
            left: 0;
            top: 70%;
          }

          .auth-container.active .toggle-panel.toggle-left {
            left: 0;
            top: -30%;
          }

          .toggle-panel {
            width: 100%;
            height: 30%;
          }

          .toggle-panel.toggle-left {
            top: 0;
          }

          .toggle-panel.toggle-right {
            right: 0;
            bottom: -30%;
          }

          .auth-container.active .toggle-panel.toggle-right {
            bottom: 0;
          }
        }

        @media screen and (max-width: 400px) {
          .form-box {
            padding: 20px;
          }

          .toggle-panel h1 {
            font-size: 30px;
          }
        }
      `}</style>
      
      <div className={`auth-container ${isActive ? 'active' : ''}`}>
        {/* Login Form */}
        <div className="form-box login">
          <div className="form-container">
            <h1>Autentificare</h1>
            <div className="input-box">
              <input type="text" placeholder="Nume utilizator sau Email" required />
              <i><User size={20} /></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Parolă" required />
              <i><Lock size={20} /></i>
            </div>
            <div className="forgot-link">
              <a href="#">Ai uitat parola?</a>
            </div>
            <button type="button" className="auth-btn">Intră în cont</button>
            <p>sau conectează-te cu</p>
            <div className="social-icons">
              <a href="#"><span style={{color: '#db4437'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></span></a>
              <a href="#"><Facebook size={24} color="#1877f2" /></a>
              <a href="#"><Github size={24} /></a>
              <a href="#"><Linkedin size={24} color="#0077b5" /></a>
            </div>
            <div className="back-link">
              <Link to="/">← Înapoi la pagina principală</Link>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <div className="form-container">
            <h1>Înregistrare</h1>
            <div className="input-box">
              <input type="text" placeholder="Nume utilizator" required />
              <i><User size={20} /></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i><Mail size={20} /></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Parolă" required />
              <i><Lock size={20} /></i>
            </div>
            <button type="button" className="auth-btn">Creează cont</button>
            <p>sau înregistrează-te cu</p>
            <div className="social-icons">
              <a href="#"><span style={{color: '#db4437'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></span></a>
              <a href="#"><Facebook size={24} color="#1877f2" /></a>
              <a href="#"><Github size={24} /></a>
              <a href="#"><Linkedin size={24} color="#0077b5" /></a>
            </div>
            <div className="back-link">
              <Link to="/">← Înapoi la pagina principală</Link>
            </div>
          </div>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Salut, Bine ai venit!</h1>
            <p>Nu ai încă un cont?</p>
            <button className="auth-btn register-btn" onClick={handleRegisterClick}>
              Înregistrează-te
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Bine ai revenit!</h1>
            <p>Ai deja un cont?</p>
            <button className="auth-btn login-btn" onClick={handleLoginClick}>
              Autentifică-te
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
