from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def test_post():
    if request.method == 'POST':
        id = request.form['cusId']
        name = request.form['name']
        address = request.form['address']
        salary = request.form['salary']
        print(id, name, address, salary)
        return jsonify({'state': "200"})
    else:
        return jsonify({'state': '404'})


if __name__ == '__main__':
    app.run(
        host='127.0.0.1', port=5000, debug=True
    )
