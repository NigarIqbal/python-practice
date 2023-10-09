from flask import Flask, render_template, request
import hashlib

app = Flask(__name__, static_url_path='/static')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/reverse', methods=['POST'])
def reverse_string():
    data = request.form['input_string']
    print(f"Received data: {data}")  # Add this line for debugging
    reversed_string = data[::-1]
    return reversed_string


@app.route('/changecase', methods=['POST'])
def change_case():
    data = request.form['input_string']
    case_changed_string = data.swapcase()
    return case_changed_string

@app.route('/encrypt', methods=['POST'])
def encrypt_string():
    data = request.form['input_string']
    sha256_hash = hashlib.sha256(data.encode()).hexdigest()
    return sha256_hash

if __name__ == '__main__':
    app.run(debug=True)
