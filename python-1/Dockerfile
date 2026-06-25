FROM python:3.12
WORKDIR /app
COPY requirements.txt .
EXPOSE 5000
COPY . .
RUN pip install -r requirements.txt 
CMD ["python","app.py"]






























