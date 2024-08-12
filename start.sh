ORIGINAL_DIR = $(pwd)

cd frontend/
npm run dev &

cd ../backend/rocketmancer/
source .venv/bin/activate
python3 manage.py runserver &

wait