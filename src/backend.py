from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Load your classification model
model = load_model('/path/to/galaxies_stars_classifier.h5')

# Function to preprocess the image for classification
def preprocess_image(img):
    # Resize the image to match the model input size
    img = cv2.resize(img, (224, 224))
    # Convert image to float32 and scale pixel values to [0, 1]
    img = img.astype('float32') / 255.0
    # Add batch dimension
    img = np.expand_dims(img, axis=0)
    return img

# Function to classify an image
def classify_image(img):
    # Make a prediction using your classification model
    prediction = model.predict(img)
    return prediction

# Route to handle image uploads
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Read the image file
    img_bytes = file.read()

    # Convert bytes to numpy array
    img_np = np.frombuffer(img_bytes, np.uint8)

    # Decode image
    img = cv2.imdecode(img_np, cv2.IMREAD_COLOR)

    # Preprocess the image
    preprocessed_img = preprocess_image(img)

    # Classify the image
    prediction = classify_image(preprocessed_img)

    # Prepare response
    if prediction > 0.5:
        pred_label = "Star"
    else:
        pred_label = "Galaxy"

    return jsonify({'classification': pred_label, 'prediction': float(prediction)})

if __name__ == '__main__':
    app.run(debug=True)