@echo off
REM Stitch Retro Memory Scrapbook - Setup Helper Script for Windows

echo.
echo 🎉 Welcome to Stitch Retro Memory Scrapbook!
echo.
echo 📋 Checking prerequisites...

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found. Please install Node.js 18+ from nodejs.org
    exit /b 1
)

for /f "tokens=1" %%i in ('node -v') do set NODE_VER=%%i
echo ✅ Node.js %NODE_VER% found

REM Check npm
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm not found
    exit /b 1
)

for /f "tokens=1" %%i in ('npm -v') do set NPM_VER=%%i
echo ✅ npm %NPM_VER% found

echo.
echo 📦 Installing dependencies...
if not exist "node_modules" (
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Failed to install dependencies
        exit /b 1
    )
    echo ✅ Dependencies installed successfully
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🚀 Ready to start!
echo.
echo 📚 Documentation:
echo   1. QUICK_START.md  - Get started in 3 steps
echo   2. FILE_GUIDE.md   - Where to find everything
echo   3. SETUP_GUIDE.md  - Full documentation
echo.
echo 💻 Next steps:
echo   npm run dev        - Start development server
echo   npm run build      - Build for production
echo   npm run preview    - Preview production build
echo.
echo Happy coding! 💖
echo.
pause
