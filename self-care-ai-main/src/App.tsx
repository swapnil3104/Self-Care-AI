import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { LoginPage } from './components/Auth/LoginPage';
import { SignupPage } from './components/Auth/SignupPage';
import { MedicalLibraryPage } from './components/MedicalLibrary';
import { GlaucomaPage } from './components/MedicalLibrary/Conditions/GlaucomaPage';
import { CataractPage } from './components/MedicalLibrary/Conditions/CataractPage';
import { DiabeticRetinopathyPage } from './components/MedicalLibrary/Conditions/DiabeticRetinopathyPage';
import { EyeHealthPage } from './components/MedicalLibrary/Prevention/EyeHealthPage';
import { EyeExercisesPage } from './components/MedicalLibrary/Prevention/EyeExercisesPage';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { DashboardPage } from './components/Dashboard/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="/medical-library" element={<MedicalLibraryPage />} />
        <Route path="/medical-library/glaucoma" element={<GlaucomaPage />} />
        <Route path="/medical-library/cataract" element={<CataractPage />} />
        <Route path="/medical-library/diabetic-retinopathy" element={<DiabeticRetinopathyPage />} />
        <Route path="/medical-library/eye-health" element={<EyeHealthPage />} />
        <Route path="/medical-library/eye-exercises" element={<EyeExercisesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
