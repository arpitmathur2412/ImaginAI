import os

import tensorflow as tf
from flask import Flask, render_template, request, jsonify
import model_functions

app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = 'static/uploads'
# app.config['RESULT_FOLDER'] = 'static/results'
# app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# # Load the Pix2Pix model
# # pix2pix_model = Pix2PixModel('pix2pix_og.ipynb')
# model="pix2pix_og.ipynb"

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@app.route('/', methods=['GET'])
def home():
    return "Hello Arpit!!"



@app.route('/predict', methods=['GET'])
def predict():
    reconstructed_model=tf.keras.models.load_model("model.keras")
    # Run the trained model on a few examples from the test set
    test_dataset = tf.data.Dataset.list_files("./*.jpg")
    test_dataset = test_dataset.map(model_functions.load_image_test)
    test_dataset = test_dataset.batch(model_functions.BATCH_SIZE)

    for example_input in test_dataset.take(1):
          model_functions.generate_images(reconstructed_model, example_input,1)

    return "Predicted image saved"


# @app.route('/route', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         if 'image' not in request.files:
#             return jsonify({"error": "No image provided"})
        
#         image_file = request.files['image']

#         if image_file.filename == '':
#             return jsonify({"error": "No selected file"})

#         if image_file and allowed_file(image_file.filename):
#             input_path = os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename)
#             output_path = os.path.join(app.config['RESULT_FOLDER'], image_file.filename)

#             image_file.save(input_path)

#             # Apply the Pix2Pix model to generate the result
#             model.generate(input_path, output_path)

#             return jsonify({"result": output_path})
#         else:
#             return jsonify({"error": "Invalid file format. Supported formats: png, jpg, jpeg"})
    
#     return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
