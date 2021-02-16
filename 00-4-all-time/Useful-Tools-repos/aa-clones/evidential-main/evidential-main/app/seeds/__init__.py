from flask.cli import AppGroup
from .users import seed_users, undo_users
from .texts import seed_texts, undo_texts
from .claims import seed_claims, undo_claims
from .change_histories import seed_change_histories, seed_change_histories_again, undo_all_change_histories
from .hit_keys import seed_hit_keys, undo_hit_keys
from .claim_hit_keys import seed_claim_hit_keys, undo_claim_hit_keys
from .arguments import seed_arguments, undo_arguments
from .support_rebuts import seed_supports_rebuts, undo_supports_rebuts
from .hits import seed_hits, undo_hits
from .ratings import seed_ratings, undo_ratings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_texts()
    seed_claims()
    seed_hit_keys()
    seed_claim_hit_keys()
    seed_arguments()
    seed_supports_rebuts()
    seed_change_histories()
    seed_hits()
    seed_ratings()
    seed_change_histories_again()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_all_change_histories()
    undo_ratings()
    undo_hits()
    undo_supports_rebuts()
    undo_arguments()
    undo_claim_hit_keys()
    undo_hit_keys()
    undo_claims()
    undo_texts()
    undo_users()
