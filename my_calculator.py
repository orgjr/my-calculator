from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def my_calculator():
    return render_template("calculator.html")
