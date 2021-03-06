"""empty message

Revision ID: 5e72a08848e4
Revises: 
Create Date: 2018-10-09 21:50:31.698506

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e72a08848e4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('license',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('licensekey', sa.String(length=500), nullable=True),
    sa.Column('product', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product'], ['product.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_license_licensekey'), 'license', ['licensekey'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_license_licensekey'), table_name='license')
    op.drop_table('license')
    op.drop_table('product')
    # ### end Alembic commands ###
